import React from 'react'

const SideList = (props) => {
    // props.lists が配列であることを確認する必要がある
    if (!Array.isArray(props.lists)) {
      return null; // エラー処理や何も表示しない場合の処理
    }
  
    return (
      <div>
        {props.lists.map((list) => (
            <li><a href="#">{list}</a></li>
        ))}
      </div>
    );
  };
export default SideList