import React, {useState} from "react";
import uuid from "react-uuid";
export default function Task1() {
    const initNotes = [
        {id:uuid(),name:'Name1' ,content:'name1 content', isEdit:false},
        {id:uuid(),name:'Name2' ,content:'name2 content', isEdit:false},
        {id:uuid(),name:'Name3' ,content:'name3 content', isEdit:false},
        {id:uuid(),name:'Name4' ,content:'name4 content', isEdit:false},
        {id:uuid(),name:'Name5' ,content:'name5 content', isEdit:false}
    ];
    const [notes, setNotes] = useState(initNotes);
    let text = '';
 function edit(id){
        const newNotes = notes.map((note)=>{
            if(note.id === id){
                note.isEdit = !note.isEdit;
            }
            return note;
        })
        setNotes(newNotes);
    }
    function change(id, event){
        const newNotes = notes.map((note)=>{
            if(note.id === id){
                return {...note, content:event.target.value}
            }
            return note;
        })
        setNotes(newNotes);
    }
    const list = notes.map((note)=>{
        if (note.isEdit){
            text = <input type="text" value={note.content} onChange ={(event)=>{change(note.id ,event)}}/>
        }else{
            text = note.content;
        }
        return <li key={note.id}>{note.name} {text}  <button onClick={()=>{edit(note.id)}}>{note.isEdit?'Save':'Edit'}</button></li>
    })
  return (
    <div>
        <ul>
            {list}
        </ul>
    </div>
  );
}