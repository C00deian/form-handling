import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


function ReactHookForm() {

    // zod validation
    const schema = z.object({
        name: z.string().min(4, 'Name Must be At least 4 characters long.'),
        password: z.string().min(6, 'Password Should be 6 characters long')
    });

// zod validation 
    type formData = z.infer<typeof schema>


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors , isValid}
    } = useForm<formData>({ resolver: zodResolver(schema) });

    //Handle Login 
    const Login = (data: FieldValues) => {
        console.log(data)
        alert('Form Submitted Successfully');
        reset( );
    }

    return (
        <form onSubmit={handleSubmit(Login)} >
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    {...register('name')}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}

            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    className="form-control"
                    type="text"
                    id="password"
                    {...register('password')}

                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}

            </div>
            <button className="btn btn-primary" type="submit" disabled={!isValid} >
                Submit
            </button>
        </form>
    );
}

export default ReactHookForm;
