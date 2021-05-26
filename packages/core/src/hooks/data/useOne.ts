import { useContext } from "react";
import { QueryObserverResult, useQuery, UseQueryOptions } from "react-query";

import { DataContext } from "@contexts/data";
import {
    GetOneResponse,
    IDataContext,
    HttpError,
    BaseRecord,
    Identifier,
} from "../../interfaces";
import { useNotification, useTranslate } from "@hooks";

export const useOne = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError
>(
    resource: string,
    id: Identifier,
    options?: UseQueryOptions<GetOneResponse<TData>, TError>,
): QueryObserverResult<GetOneResponse<TData>> => {
    const { getOne } = useContext<IDataContext>(DataContext);
    const notification = useNotification();
    const translate = useTranslate();

    const queryResponse = useQuery<GetOneResponse<TData>, TError>(
        [`resource/getOne/${resource}`, { id }],
        () => getOne<TData>(resource, id),
        {
            ...options,
            onError: (err: TError) => {
                if (options?.onError) {
                    options.onError(err);
                }

                notification.error({
                    key: `${id}-${resource}-notification`,
                    message: translate(
                        "common:notifications.error",
                        { statusCode: err.statusCode },
                        `Error (status code: ${err.statusCode})`,
                    ),
                    description: err.message,
                });
            },
        },
    );

    return queryResponse;
};
