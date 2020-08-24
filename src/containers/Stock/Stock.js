import React , { useState, useEffect} from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Stock.css';

const Stock = (props) => {

    const [stockForm, setStockForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Fish Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        port: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Port'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        price: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'price'
            },
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 5,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        size: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'small', displayValue: 'small'},
                    {value: 'medium', displayValue: 'medium'},
                    {value: 'big', displayValue: 'big'}
                ]
            },
            value: 'medium',
            validation: {},
            valid: true
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const formElementsArray = [];
    for (let key in stockForm) {
        formElementsArray.push({
          id: key,
          config: stockForm[key]
        });
      }

    let form = (
        <form 
            //onSubmit={orderHandler}
            >
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              //changed={event => inputChangedHandler(event, formElement.id)}
            />
          ))}
          <Button btnType="Success" disabled={!formIsValid}>
            Submit
          </Button>
        </form>
      );

    return (
        <div className={classes.Stock}>
            {form}
        </div>
    );
}

export default Stock;