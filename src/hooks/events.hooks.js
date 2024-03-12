import { useMutation, useQuery } from '@tanstack/react-query';
import { registerEventStep1, registerEventStep2, registerEventStep3, registerEventStep4 } from '../api';
import errorParser from '../utils/errorParser';
import { toast } from '../components';
import { getMemberDetails } from '../api/requests';

function useRegisterStep1(setErrors, eventName) {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(registerEventStep1(eventName), {
        onError: (err) => {
            const parsedError = errorParser(err)
            if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
            else {
                parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                setErrors(prevErrors => {
                    for (const key in prevErrors) {
                        if (parsedError.hasOwnProperty(key)) {
                            prevErrors[key] = parsedError[key]
                        }
                    }
                    return prevErrors
                })
                toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
            }
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}

function useRegisterStep2(setErrors, eventName) {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(registerEventStep2(eventName), {
        onError: (err) => {
            const parsedError = errorParser(err)
            if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
            else {
                parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                setErrors(prevErrors => {
                    for (const key in prevErrors) {
                        if (parsedError.hasOwnProperty(key)) {
                            prevErrors[key] = parsedError[key]
                        }
                    }
                    return prevErrors
                })
                toast.error('Errors in the registration form. Please check the form and try again.', err, { autoClose: 5000 })
            }
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}

function useRegisterStep3(setErrors, eventName) {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(registerEventStep3(eventName), {
        onError: (err) => {

            const parsedError = errorParser(err)
            if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
            else {
                parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                setErrors(prevErrors => {
                    for (const key in prevErrors) {
                        if (parsedError.hasOwnProperty(key)) {
                            prevErrors[key] = parsedError[key]
                        }
                    }
                    return prevErrors
                })
                toast.error('Errors in the registration form. Please check the form and try again.', { autoClose: 5000 })
            }
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}

function useRegisterStep4(setErrors, eventName) {
    const { mutate, isLoading, isSuccess, isError, data, error } = useMutation(registerEventStep4(eventName), {
        onError: (err) => {
            const parsedError = errorParser(err)
            if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
            else {
                parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                setErrors(prevErrors => {
                    for (const key in prevErrors) {
                        if (parsedError.hasOwnProperty(key)) {
                            prevErrors[key] = parsedError[key]
                        }
                    }
                    return prevErrors
                })
                toast.error('Errors in the form. Please check the form and try again.', { autoClose: 5000 })
            }
        }
    })
    return { mutate, isLoading, isSuccess, isError, data, error }
}


function useGetMemberDetails(setErrors, eventName) {
    const { isLoading, isError, data, error } = useQuery({ queryKey: ['registrations', eventName], queryFn: getMemberDetails(eventName), enabled: !!eventName })
    
    if (isError) {
        const parsedError = errorParser(error)
        if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
        else {
            parsedError.error ?
            <></>
                // toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
                :
                // toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
                <></>
        }
    }
    return { isLoading, data }
}

export {
    useRegisterStep1,
    useRegisterStep2,
    useRegisterStep3,
    useRegisterStep4,
    useGetMemberDetails,
}