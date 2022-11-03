import React, { useState } from 'react'
import './TicTacToe.css'
const TicTacToe = () => {
    const [grid, setgrid]=useState(Array(9).fill(''))
    const [values, set_values]=useState('X')

    const when_click = (i) =>{
        let game_square = [...grid]

        if (grid[i] !== ''){
            alert('Box is already fulfilled')
            return
        }
        game_square[i] = values
        setgrid(game_square)
        //for alternate moves of x and 0
        if(values ==='X'){
            set_values('O')
        }else {
            set_values('X')
        }
        //checkwinners of the game 
        if(winnerofgame(game_square)){
               alert("Winner")
               game_square.fill('')
               setgrid(game_square)
        }
        // console.log("function on click working", i)

        //for the tie among players 
        if(tie(game_square)){
            alert("X and O Both have tie in this Match")
            game_square.fill('')
               setgrid(game_square)
        }
    }
    //function for tie
    const tie = (grid) =>{
        let c =0
        grid.forEach( element => {
            if(element !== ''){
                c++
            }
        })
        if(c >= 9 ){
            return true
        }else {
            return false
        }
    }
    //situations to check for win
    const winnerofgame = (grid) => {
        const possibilities_to_win =[[0,1,2],[3,4,5],[6,7,8],
                                    [0,3,6],[1,4,7],[2,5,8],
                                    [0,4,8],[2,4,8]]
        let isWinner = false;
        possibilities_to_win.forEach(element => {
           if(grid[element[0]] !== '' && grid[element[1]]!== '' && grid[element[2]] !== ''){            
           if(grid[element[0]] === grid[element[1]] && grid[element[1]]=== grid[element[2]]){
                 isWinner = true
           }
        }
    //console.log(isWinner)
          
        })
        return isWinner
    }




  return (
    <>
    <h1 className='game-name'>TicTacToe</h1>
    <table>
        <tbody>
            <tr>
                <td onClick={()=>{when_click(0)}} >{grid[0]}</td>
                <td onClick={()=>{when_click(1)}} >{grid[1]}</td>
                <td onClick={()=>{when_click(2)}} >{grid[2]}</td>
            </tr>
            <tr>
                <td onClick={()=>{when_click(3)}} >{grid[3]}</td>
                <td onClick={()=>{when_click(4)}} >{grid[4]}</td>
                <td onClick={()=>{when_click(5)}} >{grid[5]}</td>
            </tr>
            <tr>
                <td onClick={()=>{when_click(6)}} >{grid[6]}</td>
                <td onClick={()=>{when_click(7)}} >{grid[7]}</td>
                <td onClick={()=>{when_click(8)}} >{grid[8]}</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default TicTacToe
