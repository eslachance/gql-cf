interface PROJECT_GQL_CONFIG = {
  manager: boolean
  provider: boolean
  resident: boolean
  web: boolean
  mobile: boolean
}

export class ConditionalField {
  public static projectConfig: PROJECT_GQL_CONFIG
  public static init(projectConfig: PROJECT_GQL_CONFIG) {
    ConditionalField.projectConfig = projectConfig
  }
  public static cf(base: Array<string>, ...variables: Array<string | Function>) {
    const result = [base[0]]
    if (!ConditionalField.projectConfig) {
      return
    }
    variables.forEach((key, i) => {
      const res = typeof key === 'function' ? key(ConditionalField.projectConfig) || '' : key
      result.push(res, base[i + 1])
    })
    return result.join('')
  }
}
