<script>
    import {CalculationInput} from "../generated/sample_pb.js";
    import {calculateSum} from "../grpcRequests/calculation.js";
    let num1;
    let num2;
    const handleSum=()=>{
        const sumReq=new CalculationInput();
        sumReq.setNumber1(num1)
        sumReq.setNumber2(num2)
        calculateSum(sumReq).then(res=>{
            console.log(res)
        })
    }
</script>
<div>
    <form onsubmit={(e)=>{
        e?.preventDefault();
        handleSum();
    }}>
        <input on:change={(e)=>{
                num1=e?.target?.value;
            }}
               type="number"
               value={num1}/>
        <input
                type="number"
                value={num2}
                on:change={(e)=>{
                num1=e?.target?.value;
            }}
        />
    </form>



</div>
