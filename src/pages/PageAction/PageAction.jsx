import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { connect } from 'react-redux'
import products from "../../reducers/products";
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from "../../actions";


class PageAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkStatus: "",
    };
  }
  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      // callApi(`products/${id}`, "GET", null).then((res) => {
      //   let data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtName: data.name,
      //     txtPrice: data.price,
      //     chkStatus: data.status,
      //   });
      // });
      this.props.onEditProduct(id)
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      let {itemEditing}=nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkStatus: itemEditing.status
      })
    }
  }
  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    let { id,txtName, txtPrice, chkStatus } = this.state;
    let { history } = this.props;
    let product ={
      id: id,
      name: txtName,
      price: txtPrice,
      status : chkStatus 
    }
    if (id) {
      // callApi(`products/${id}`, "PUT", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: chkStatus,
      // }).then((res) => {
      //   history.goBack();
      // });
      this.props.onUpdateProduct(product)
      history.goBack();

    }
    else{
      // callApi("products", "POST", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: chkStatus,
      // }).then((res) => {
      //   history.goBack();
      // });
      this.props.onAddProduct(product)
      history.goBack();
    }
  };
  render() {
    let { txtName, txtPrice, chkStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="txtName"
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá sản phẩm</label>
            <input
              type="text"
              name="txtPrice"
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                name="chkStatus"
                id=""
                type="checkbox"
                value="checkedValue"
                aria-label="Còn hàng"
                onChange={this.onChange}
                value={chkStatus}
                checked={chkStatus}
              />
              Còn hàng
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Lưu lại
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    itemEditing : state.itemEditing
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return{
    onAddProduct : (products)=>{
      dispatch(actAddProductRequest(products))
    },
    onEditProduct: (id) =>{
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product)=>{
      dispatch(actUpdateProductRequest(product))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PageAction);
