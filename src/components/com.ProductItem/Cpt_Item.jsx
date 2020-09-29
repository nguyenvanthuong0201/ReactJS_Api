import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cpt_Item extends Component {
  onDelete=(id)=>{
    if(confirm('Bạn có chắc chắn muốn xóa ? ')){ // eslint-disable-line 
      this.props.onDelete(id)
    }
  }
    render() {
        let{product,index}=this.props
        let statusName = product.status? "Còn hàng" : "Hết hàng"  /// thay đổi string
        let statusClass = product.status? "warning" : "default"     /// thay đổi class
        return (
            <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <span className={`badge badge-${statusClass}`}>{statusName}</span>
            </td>
            <td>
              <Link to={`product/${product.id}/edit`} className="btn btn-warning">Sửa</Link>
              <button type="button" className="btn btn-danger" onClick={()=> this.onDelete(product.id)}>Xóa</button>
            </td>
          </tr>
        );
    }
}

export default Cpt_Item;