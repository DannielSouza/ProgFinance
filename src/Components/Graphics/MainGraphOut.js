import React from 'react'
import Chart from 'react-apexcharts';
import style from '../styles/Details.module.css'

const MainGraph = ({tasks}) => {
  var despesasMensais = 0
  var estudos = 0
  var saude = 0
  var entretenimento = 0
  var alimentacao = 0
  var outros = 0

  if(tasks){
  tasks.forEach(element => {
    if(element.option === "saida"){
      if(element.outType === "despesasMensais") despesasMensais = despesasMensais + Number(element.value)
      if(element.outType === "estudos") estudos = estudos + Number(element.value) 
      if(element.outType === "saude") saude = saude + Number(element.value) 
      if(element.outType === "entretenimento") entretenimento = entretenimento + Number(element.value)
      if(element.outType === "alimentacao") alimentacao = alimentacao + Number(element.value) 
      if(element.outType === "outros") outros = outros + Number(element.value) 
    }
  });


  }


    if(despesasMensais || estudos || saude || entretenimento || alimentacao || outros)return (
    <Chart
      className={style.mainGraph}
      type="donut"
      series={[despesasMensais, estudos, saude, entretenimento, alimentacao, outros]}
      options={{
        labels:['Despesas mensais', "Estudos", "Saude", "Entretenimento", "Alimentação", "Outros"],

        tooltip: {
          y: {
            formatter: function (val) {
              return "R$" + val
            }
          }
        }
      }}
    /> 
  )
}

export default MainGraph