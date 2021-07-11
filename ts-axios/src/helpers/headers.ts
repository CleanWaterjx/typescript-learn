import { isPlainObject } from "./util";

function normalizeHeaderName(headers: any, normalizedName:
    string): void {
    if (!headers) {
        return
    }
    Object.keys(headers).forEach((name) => {
        if (name !== normalizedName && name.toUpperCase() ===
        normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name]
            delete headers[name]
        }
    })
}

export function processHeaders(headers: any, data: any): any {
    normalizeHeaderName(headers, 'Context-Type')
    if (isPlainObject(data)) {
        if (headers && !headers['Context-Type']) {
            headers['Context-Type'] = 'application/json;charset=utf-8'
        }
    }
}