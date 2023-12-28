import { INotification } from "./notification.interface"
import { Notificaion } from "./notification.model" 

const createNotify = async ( notifyDetails: INotification): Promise<INotification | null> => {
    const newNoti = await Notificaion.create(notifyDetails)
    return newNoti
  }


export const NotifyService = {
    createNotify
}
