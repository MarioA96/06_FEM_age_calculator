<script lang="ts">

    import { css } from "../../../styled-system/css"
    import InputComponent from "./components/Input.svelte"
    import OutputComponent from "./components/Output.svelte"
    import { card } from './components/styles'

    $: stateInfo = {
        day: '',
        month: '',
        year: '',
        isSubmited: false
    }
    $: setStateInfo = (day: string, month: string, year: string, isSubmited: boolean) => {
        stateInfo.day = day
        stateInfo.month = month
        stateInfo.year = year
        stateInfo.isSubmited = isSubmited
    }

    $: if (stateInfo.isSubmited) {
        console.log('Submitted')
    }

</script>


<div id="card" class={ card({}) }>

    <div id="input-submit-box" class={ 
            css({ 
                width: { xsm: '100%' },
                height: { xsm: '40%' }
            }) 
        }
    >
        <InputComponent {setStateInfo} { ...stateInfo }/>
    </div>

    
    <div id="output-submit-box"class={ 
            css({ 
                width: { xsm: '100%' },
                height: { xsm: '60%' }
            }) 
        }
    >
        <OutputComponent {setStateInfo} { ...stateInfo } />
    </div>

</div>