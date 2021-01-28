import { ActivityThreadWrapper } from "./app/ActivityThreadWrapper";
import { ActivityWrapper } from "./app/ActivityWrapper";
import { ApplicationWrapper } from "./app/ApplicationWrapper";

export let Application = Java.use("android.app.Application") as (Java.Wrapper<{}> & ApplicationWrapper);

export let Activity = Java.use("android.app.Activity") as (Java.Wrapper<{}> & ActivityWrapper);
export let ActivityThread = Java.use("android.app.ActivityThread") as (Java.Wrapper<{}> & ActivityThreadWrapper);
export let Service = Java.use("android.app.Service") as (Java.Wrapper<{}> & ServiceWrapper);
