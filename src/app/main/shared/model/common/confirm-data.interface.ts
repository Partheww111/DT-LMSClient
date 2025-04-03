export interface IConfirmData {
  title?: string,
  message?: string,
  okText?: string,
  cancelText?:string,
  focus?: 'ok' | 'cancel'
}