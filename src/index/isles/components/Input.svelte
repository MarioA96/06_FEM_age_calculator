<script lang="ts">
    import { form_box, fields_box, input_box, submit_box } from "./styles";

    type Input = {
        day: string,
        month: string,
        year: string
    }

    export let day: string;
    export let month: string;
    export let year: string;
    export let isSubmited: boolean;

    export let setStateInfo: (day: string, month: string, year: string, isSubmited: boolean) => void;

    
    let input: Input = {
        day,
        month,
        year
    }



    function validateInput(type: string, value: string): boolean {

        let elementInput = document.getElementById(`input_${type}`) as HTMLInputElement;
        // let elementLabel = document.getElementById(`input_${type}`) as HTMLInputElement;
        // cambiar cada input.type por mejor el value ya que ese es directo del input.target.value

        if (type !== 'day' && type !== 'month' && type !== 'year') {
            throw new Error('Invalid input type');
        }
        if (type === 'day') {
            if ( Number.isNaN(parseInt(value)) || parseInt(value) < 1 || parseInt(value) > 31 ) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid day");
                return false;
            }else if (parseInt(value) > 28 && parseInt(input.month) === 2 ) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid day for February");
                return false;
            }else if (parseInt(value) > 30 && parseInt(input.month) === 4 || parseInt(input.month) === 6 || parseInt(input.month) === 9 || parseInt(input.month) === 11) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid day for April, June, September, November");
                return false;
            }else{
                elementInput.style.border = '2px solid green';
                return true;
            }
        }
        if (type === 'month') {
            if ( Number.isNaN(parseInt(value)) || parseInt(value) < 1 || parseInt(value) > 12 ) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid month");
                return false;
            }
            else if (parseInt(value) === 2 && parseInt(input.day) > 28) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid month for February");
                return false;
            }
            else if (parseInt(value) === 4 && parseInt(input.day) > 30) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid month for April");
                return false;
            }
            else if (parseInt(value) === 6 && parseInt(input.day) > 30) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid month for June");
                return false;
            }
            else if (parseInt(value) === 9 && parseInt(input.day) > 30) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid month for September");
                return false;
            }
            else if (parseInt(value) === 11 && parseInt(input.day) > 30) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid month for November");
                return false;
            }else{
                elementInput.style.border = '2px solid green';
                return true;
            }
        }
        if (type === 'year') {
            if ( Number.isNaN(parseInt(value)) || parseInt(value) < 1900 || parseInt(value) > 2024 ) {
                elementInput.style.border = '2px solid red';
                console.log("Invalid year");
                return false;
            }else{
                elementInput.style.border = '2px solid green';
                return true;
            }
        }

        return false;
    }

    // Toda esta funcion podria ser eliminida si se cambia el input.target.value por el value directo 
    // Tambien se podrian quitar los on:input
    function handleInput(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {

        const { id } = event.target as HTMLInputElement;
        const type: string = id.split('_')[1];
        const { value } = event.target as HTMLInputElement;

        const isValidInput = validateInput(type, value);
        //* Esto nos permite a futuro hacer un cambio en el estilo del input si es inválido

        //? Puede que esto no sea necesario o redundante
        if (isValidInput) {
            input = {
                ...input,
                [type]: value
            }
        }

    }

    function handleSubmit(event: Event) {
        event.preventDefault();

        const isValidDayInput = validateInput('day', (event.target as HTMLFormElement).input_day.value);
        const isValidMonthInput = validateInput('month', (event.target as HTMLFormElement).input_month.value);
        const isValidYearInput = validateInput('year', (event.target as HTMLFormElement).input_year.value);

        if (isValidDayInput && isValidMonthInput && isValidYearInput){
            day = (event.target as HTMLFormElement).input_day.value;
            month = (event.target as HTMLFormElement).input_month.value;
            year = (event.target as HTMLFormElement).input_year.value;
            isSubmited = true;
            setStateInfo(day, month, year, isSubmited );
        }else {
            isSubmited = false;
        }
        
        console.log(isSubmited);
    }

</script>

<form class={ form_box({}) } on:submit={ handleSubmit }>
    <div id="fields-box" class={ fields_box({}) }>
        <div class={input_box({})}>
            <label for="input" class="input-label">DAY</label>
            <input type="text" class="input" id="input_day" placeholder="DD" maxlength="2" autocomplete="off" on:input={ handleInput }>
        </div>
        <div class={input_box({})}>
            <label for="input" class="input-label">MONTH</label>
            <input type="text" class="input" id="input_month" placeholder="MM" maxlength="2" autocomplete="off" on:input={ handleInput }>
        </div>
        <div class={input_box({})}>
            <label for="input" class="input-label">YEAR</label>
            <input type="text" class="input" id="input_year" placeholder="YYYY" maxlength="4" autocomplete="off" on:input={ handleInput }>
        </div>
    </div>
    <div id="submit-box" class={ submit_box({}) }>
        <div id="decoration_box">
            <hr id="decoration">
        </div>
        <div id="button_box">
            <button type="submit">
                <img src="/06_FEM_age_calculator/assets/images/icon-arrow.svg" alt="arrow_down">
            </button>
        </div>
    </div>
</form>