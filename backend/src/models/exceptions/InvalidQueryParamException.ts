export class InvalidQueryParamException extends Error {
  constructor (parameter: string, value: string) {
    super(`Invalid Query param { key: ${parameter}, value: ${value}}`)
  }
}
