import Schema, { Rules } from 'async-validator'

export const validate = async (descriptor: Rules, form: any): Promise<any> => {
  const validator = new Schema(descriptor)

  try {
    await validator.validate(form)
    return { errors: false }
  } catch ({ errors, fields }) {
    return { errors, fields }
  }
}
