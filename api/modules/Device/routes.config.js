module.exports = [
  { path: '/', 
    method: 'get', action: 'find' },
  { path: '/', 
    method: 'post', action: 'create' },
  { path: '/schema', 
    method: 'get', action: 'getSchema' },
  { path: '/filter', 
    method: 'get', action: 'findByFilter' },
  { path: '/populate', 
    method: 'get', action: 'findAllPopulate' },
  { path: '/setCSTATranslateOffline', 
    method: 'post', action: 'updateDevicesToOff' },
  { path: '/byDeviceId/:id', 
    method: 'put', action: 'updateByDeviceId' },
  { path: '/byInvokeId/:id', 
    method: 'put', action: 'updateByInvokeId' },
  { path: '/setDeviceMonitorStop/:id', 
    method: 'put', action: 'setDeviceMonitorStop' },
  { path: '/:id', 
    method: 'get', action: 'findById' },
  { path: '/:id/populate', 
    method: 'get', action: 'findByIdPopulate' },
  { path: '/:id', 
    method: 'put', action: 'update' },
  { path: '/:id', 
    method: 'delete', action: 'remove' },
]