import { API_RM } from "../constants/Api.constants"

class RMService{

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS())
        return response.json()
    }

    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTERS_BY_ID(id))
        return response.json()
    }

}

export default new RMService()