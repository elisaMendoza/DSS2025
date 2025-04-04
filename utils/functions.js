import ollama from 'ollama';
import sanitizer from 'sanitizer';

export const limpiar =(payload) => {
    payload = payload.replace('<','')
    return payload
}

export const detectar = (payload) =>{
    if(payload.includes('<')){
        return true
    }else{
        return false
    }
}

export const detectaIA = async (payload) => {
    try {
        const response = await ollama.generate({
            model: 'segurito',
            prompt: payload,
        });
        return eval(response.response);
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const sanitizerEscape = (payload) => {
    payload = sanitizer.escape(payload);
    return payload;
}