import GeneralSettings from "../components/GeneralSettings.vue";
import {ref, watch} from 'vue';

interface SettingsMap{
    general: GeneralSettings;
    notifications: NotificationSettings;
    privacy: PrivacySettings;
}

type SettingsKey = keyof SettingsMap;


interface GeneralSettings{
    username: string;
    email: string;
    gender: string;
    country: string;
}

const init = <T extends SettingsKey>(key:T, defaults: SettingsMap[T])=>{
const store = localStorage.getItem(key);
        if(store){
            return JSON.parse(store);
        } return defaults;
}

const watcher = <T extends SettingsKey>(key: T)=>(value:SettingsMap[T])=>{
    localStorage.setItem(key, JSON.stringify(value));
}

const general = ref<GeneralSettings>(
    init('general', {
        username: '',
        email: '',
        gender: '',
        country: ''
    })
)

watch(general, watcher('general'), {deep: true})


interface NotificationSettings{
    email: boolean;
    sms: boolean;
}

type visibility = 'public' | 'private';

interface PrivacySettings{
    visibility: visibility;
    searchable: boolean;
}

const notifications = ref<NotificationSettings>(
    init('notifications', {
        email: false,
        sms: false
    })
)
watch(notifications, watcher('notifications'), {deep: true})

const privacy = ref<PrivacySettings>(
    init('privacy', {
        visibility: 'public',
        searchable: false
    })
)
watch(privacy, watcher('privacy'), {deep: true})


export function useSettings(){
    return{
        general,
        notifications,
        privacy
    
    }
}