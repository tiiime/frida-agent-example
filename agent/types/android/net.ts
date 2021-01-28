import { ConnectivityManagerWrapper } from "./net/ConnectivityManagerWrapper";

export let ConnectivityManager = Java.use('android.net.ConnectivityManager') as (Java.Wrapper<{}> & ConnectivityManagerWrapper);;
export let ProxyInfo = Java.use('android.net.ProxyInfo');
