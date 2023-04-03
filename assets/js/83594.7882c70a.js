"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83594],{83594:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"","displayName":"useTable","props":{"resource":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route"}},"pagination":{"defaultValue":null,"description":"Configuration for pagination","name":"pagination","required":false,"type":{"name":"Pagination"},"tags":{}},"initialCurrent":{"defaultValue":{"value":"1"},"description":"Initial page index","name":"initialCurrent","required":false,"type":{"name":"number"},"tags":{"default":"1","deprecated":"`initialCurrent` property is deprecated. Use `pagination.current` instead."}},"initialPageSize":{"defaultValue":{"value":"10"},"description":"Initial number of items per page","name":"initialPageSize","required":false,"type":{"name":"number"},"tags":{"default":"10","deprecated":"`initialPageSize` property is deprecated. Use `pagination.pageSize` instead."}},"sorters":{"defaultValue":null,"description":"Sort configs","name":"sorters","required":false,"type":{"name":"{ initial?: CrudSorting; permanent?: CrudSorting; } | undefined"},"tags":{}},"initialSorter":{"defaultValue":null,"description":"Initial sorter state","name":"initialSorter","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"deprecated":"`initialSorter` property is deprecated. Use `sorters.initial` instead."}},"permanentSorter":{"defaultValue":{"value":"[]"},"description":"Default and unchangeable sorter state","name":"permanentSorter","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"default":"`[]`","deprecated":"`permanentSorter` property is deprecated. Use `sorters.permanent` instead."}},"filters":{"defaultValue":null,"description":"Filter configs","name":"filters","required":false,"type":{"name":"{ initial?: CrudFilters; permanent?: CrudFilters; defaultBehavior?: SetFilterBehavior | undefined; } | undefined"},"tags":{}},"initialFilter":{"defaultValue":null,"description":"Initial filter state","name":"initialFilter","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{"deprecated":"`initialFilter` property is deprecated. Use `filters.initial` instead."}},"permanentFilter":{"defaultValue":{"value":"[]"},"description":"Default and unchangeable filter state","name":"permanentFilter","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{"default":"`[]`","deprecated":"`permanentFilter` property is deprecated. Use `filters.permanent` instead."}},"defaultSetFilterBehavior":{"defaultValue":{"value":"`\\"merge\\"`"},"description":"Default behavior of the `setFilters` function","name":"defaultSetFilterBehavior","required":false,"type":{"name":"\\"replace\\" | \\"merge\\"","raw":"SetFilterBehavior","value":[{"value":"\\"replace\\""},{"value":"\\"merge\\""}]},"tags":{"default":"`\\"merge\\"`","deprecated":"`defaultSetFilterBehavior` property is deprecated. Use `filters.defaultBehavior` instead."}},"hasPagination":{"defaultValue":{"value":"true"},"description":"Whether to use server side pagination or not.","name":"hasPagination","required":false,"type":{"name":"boolean"},"tags":{"default":"`true`","deprecated":"`hasPagination` property is deprecated. Use `pagination.mode` instead."}},"syncWithLocation":{"defaultValue":{"value":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"},"description":"Sortings, filters, page index and records shown per page are tracked by browser history","name":"syncWithLocation","required":false,"type":{"name":"boolean"},"tags":{"default":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetListResponse<TData>, TError, GetListResponse<TData>, QueryKey>"},"tags":{}},"meta":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | (data, values, resource) => OpenNotificationParams"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | (error, values, resource) => OpenNotificationParams"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}}},"generatedAt":1680535337671}')}}]);