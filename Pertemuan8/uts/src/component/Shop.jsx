import React, { Component } from "react";
import Sharp1 from "../assets/img/Sharp2.jpg";
import Polytron1 from "../assets/img/Polytron2pintu.jpg";
import Pintu4 from "../assets/img/4pintu.jpg";
import Aqua from "../assets/img/aqua_191.jpg";
import Panasonic from "../assets/img/panasonic_2_pintu.jpg";
import Pintu3 from "../assets/img/3pintu.jpg";
import Mini from "../assets/img/mini.jpg";

class Shop extends Component {
  constructor(props) {
      super(props);
      this.state = {
          props: this.props,
          insertProduk: {
              userId: props.pid,
              id: props.pid,
              nama: this.props.Pname,
              harga: this.props.Pharga,
              total_qty: 1,
              total_harga: this.props.Pharga
          }
      }
  }

  handleChangeID = () => {
    this.setState({     
        id: this.state.insertProduk["id"] = new Date().getTime()
    })
}

  handlebeli = () => {
        fetch("http://localhost:3002/keranjang", {
            method: "post",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.insertProduk)
        }).then(response => {
            if (response.ok) {
                alert("Item Berhasil Ditambahkan Ke Keranjang")
                this.setState({
                    total_qty: 1,
                    id: this.state.insertProduk["id"] = new Date().getTime()
                })
                this.handleChangeID()
                return response.json()
            }
            else {
                alert(response.statusText)
            }
        })
}

  render() {
    return (        
      <div className="artikel"> 
        <div className="gambar-artikel">
            <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />						
        </div>
            <div className="konten-artikel">
                <p className="isi-artikel">ID    : {this.props.pid}</p>
                <p className="isi-artikel">Nama : {this.props.Pname}</p>
                <p className="isi-artikel">Harga : Rp.{this.props.Pharga}</p>
            </div>     
            <div className="konten-artikel">
              <p className="isi-artikel">Stok : {this.props.Pstok}</p>
              <button type="submit" style={{ display: "block", marginTop: 10 }} onClick={this.handlebeli} className="button_cart">Beli</button>
            </div>    
      </div>
    );
  }
}
 
export default Shop;