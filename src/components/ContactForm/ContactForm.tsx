import React from 'react'
import { useDispatch,useSelector,useStore } from 'react-redux'
import {useForm} from 'react-hook-form'
import {chooseName, chooseStocks, chooseDescription, chooseSugar, chooseType} from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';


interface DrinkFormProps {
    id?:string;
    data?:{}
}

interface DrinkState {
    name:string;
    stocks: string;
    description: string;
    sugar:string;
    type:string;
}

export const ContactForm = (props:DrinkFormProps) => {
    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<DrinkState>(state => state.name);
    const {register, handleSubmit} = useForm ({ })

   const onSubmit = (data:any, event:any) => {
       console.log(props.id)
       if (props.id!){
           server_calls.update(props.id!, data);
           console.log(`Updated:${data} ${props.id}`);
           console.log(data);
           setTimeout( () => {window.location.reload()},1000);
           event.target.reset();
       } else {
           dispatch(chooseName(data.name));
           dispatch(chooseStocks(data.stocks));
           dispatch(chooseDescription(data.description));
           dispatch(chooseSugar(data.sugar));
           dispatch(chooseType(data.type));
           server_calls.create(store.getState());
           setTimeout( () => {window.location.reload()},1000 )
       }
   }

return (
    <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name"> Name </label>
                    <Input {...register('name')} name="name" placeholder='Name'/>
                </div>
                <div>
                    <label htmlFor="stocks">Stocks</label>
                    <Input {...register('stocks')} name="stocks" placeholder='Stocks'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder='Description'/>
                </div>
                <div>
                    <label htmlFor="sugar">Sugar</label>
                    <Input {...register('sugar')} name="sugar" placeholder='Sugar'/>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <Input {...register('type')} name="type" placeholder='Type'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
  )
}
