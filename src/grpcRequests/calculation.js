import { calculatorServiceClientServer } from '../grpcClients/grpc-clients-factory'

export function calculateSum(userReq) {
  return new Promise((resolve, reject) => {
    calculatorServiceClientServer.findSum(userReq, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}
