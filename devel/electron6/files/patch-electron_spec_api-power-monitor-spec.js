--- electron/spec/api-power-monitor-spec.js.orig	2019-09-11 17:30:11 UTC
+++ electron/spec/api-power-monitor-spec.js
@@ -14,7 +14,7 @@ const Promise = require('bluebird')
 const { expect } = chai
 chai.use(dirtyChai)
 
-const skip = process.platform !== 'linux' || !process.env.DBUS_SYSTEM_BUS_ADDRESS
+const skip = (process.platform !== 'linux' && process.platform !== 'freebsd') || !process.env.DBUS_SYSTEM_BUS_ADDRESS
 
 describe('powerMonitor', () => {
   let logindMock, dbusMockPowerMonitor, getCalls, emitSignal, reset
