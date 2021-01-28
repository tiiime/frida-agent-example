import { FunctionProperty } from "../../frida_hook";

interface ConnectivityManagerWrapper {
    setGlobalProxy: FunctionProperty<ConnectivityManagerWrapper>
}