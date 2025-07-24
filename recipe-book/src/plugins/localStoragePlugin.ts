import type { PiniaPluginContext } from "pinia"

const localStoragePlugin=(context: PiniaPluginContext)=>{
    const {store} = context
    const storedData = localStorage.getItem(store.$id)
    if(storedData){
        store.$patch(JSON.parse(storedData))
    }
    store.$subscribe((mutation, state)=>{
        localStorage.setItem(store.$id, JSON.stringify(state))
        console.log(mutation)
        console.log(state)
    })
}

export default localStoragePlugin