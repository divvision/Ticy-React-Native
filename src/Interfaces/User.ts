export interface User {
    id?: Number
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    birthdate?: Date
    gender?: string
    createdAt?: Date
    apiKey?: string
}

export interface ApiUser {
    id?: Number
    first_name?: string
    last_name?: string
    email?: string
    phone?: string
    birthdate?: Date
    gender?: string
    created_at?: Date
    api_key?: string
}


export interface NewUser extends User{
    password?: string
}
