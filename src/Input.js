

import { useForm } from 'react-hook-form';


export  function Input() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
      console.log(data);
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" placeholder="Nome" {...register("Nome", {required: true, maxLength: 80})} />

      <input type="submit" />

    </form>

  );
}