import { COPYFILE_FICLONE_FORCE } from "constants"
import { request } from "http"
import { config } from "shelljs"
import { AxiosRequestConfig, AxiosResponse } from "../types"

export class AxisoError extends Error {
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse

    constructor(
        message: string,
        config: AxiosRequestConfig,
        code?: string | null,
        request?: any,
        response?: AxiosResponse
    ){
        super(message)
        this.config = config
        this.code = code
        this.request = request
        this.response = response
        this.isAxiosError = true

        Object.setPrototypeOf(this, AxisoError.prototype)
    }
}

export function  createError(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
) {
    const error = new AxisoError (message, config, code, request, response)
    return error
}