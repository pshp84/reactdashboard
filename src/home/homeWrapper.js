import styled from "styled-components";

const HomeStyleWrapper = styled.div`
height: 100%;
width: 100%;

.firstPortion{
    background-color:#ffffff;
    height: 20%;
    width: 100%;
    padding: 0px 250px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: flex-end;
    color: #787474;
    font-size: 12px
}
.secondPortion{
    height: 45%;
    background-color: #2d87af;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .circleStyle{
        height: 200px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #176286;
        text-align: center;
        box-shadow: 0 0 0 5px #1675a3;

        .datasetType{
            font-size: 20px;
            color: #2d87af;
            font-weight: bold;
        }
        .datasetValue{
            font-size: 22px;
            color: #ffffff;
            font-weight: bold;
            margin-top: 2px;
        }
    }
}
.thirdPortion{
    height: calc(100% - 45% - 20%);
    background-color: #000000;
    width: 100%;
    text-align: center;
    // overflow: auto;
    padding-bottom: 10px;

    h5{
        color: #ffffff !important;
    }

    .tableContent{
        display: flex;
        justify-content: space-evenly;
    }

    .inputPortion{
        display: flex;
        justify-content: center;
        padding-top: 30px;

        input{
            height: 35px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            padding-left: 15px;
            text-align: center;
            font-size: 16px;
            border: 1px solid #ffffff !important;
        }
        input::placeholder {
            color: #dcad57 !important;
            opacity: 1; 
        }
        button{
            outline: none;
            background-color: #dcad57;
            border: 1px solid #dcad57;
            color: #ffffff;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 8.5px 35px;
            font-weight: bold;
            cursor: pointer;
        }
        .reloadJsonBtn{
            margin: 10px;
            height: 35px;
            display: flex;
            padding: 0px 15px;
            justify-content: center;
            align-items: center;
            background-color: orange;
            font-size: 13px;
            color: #ffffff;
            font-weight: 700;
            border-radius: 20px;
            cursor: pointer;
        }
        table {
            color: gray;
            border-collapse: collapse;
            width: 50%;
          }
          
          td, th {
            border: 1px solid gray;
            text-align: left;
            padding: 8px;
          }
          
          tr {
            background-color: #dddddd;
          }
    }
}
`;

export { HomeStyleWrapper };