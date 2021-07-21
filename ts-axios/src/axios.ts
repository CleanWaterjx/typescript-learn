import Axios from "./core/Axios";
import { extend } from "./helpers/util";
import { AxisoInstance } from "./types";

function createInstance(): AxisoInstance {
    const context = new Axios()
    const instance = Axios.prototype.request.bind(context)

    extend(instance, context)

    return instance as AxisoInstance
}

const axios = createInstance()

export default axios
