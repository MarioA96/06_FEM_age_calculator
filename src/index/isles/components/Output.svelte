
<script lang="ts">
    
    import { output_box, data } from './styles';

    export let setStateInfo: (day: string, month: string, year: string, isSubmited: boolean) => void;

    export let day: string;
    export let month: string;
    export let year: string;
    export let isSubmited: boolean;

    $: getDay = '--';
    $: getMonths = '--';
    $: getYears = '---'; 

    $: if (isSubmited) {
        getDay = calculateAge().days.toString();
        getMonths = calculateAge().months.toString();
        getYears = calculateAge().age.toString();
        setStateInfo( '', '', '', false );
    }

    function calculateAge(): { age: number, months: number, days: number } {
        let today = new Date();
        let birthDate = new Date(parseInt(year), parseInt(month), parseInt(day));
        let age = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
        if (days > 0){
            months++;
        }
        if (days < 0) {
            days += 30;
        }
        if (months < 0) {
            months += 12;
            age--;
        }
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return {
            age,
            months,
            days
        };
    }

</script>

<div id="output-box" class={output_box({})}>
    <div id="content_box">
        <h1 id="data-value" class={ data({ visual: 'value' }) }>
            { getYears }
        </h1>
        <h1 id="label-years" class={ data({ visual: 'label' }) }>years</h1>
    </div>
    <div id="content_box">
        <h1 id="data-value" class={ data({ visual: 'value' }) }>
            { getMonths }
        </h1>
        <h1 id="label-months" class={ data({ visual: 'label' }) }>months</h1>
    </div>
    <div id="content_box">
        <h1 id="data-value" class={ data({ visual: 'value' }) }>
            { getDay }
        </h1>
        <h1 id="label-days" class={ data({ visual: 'label' }) }>days</h1>
    </div>
</div>
