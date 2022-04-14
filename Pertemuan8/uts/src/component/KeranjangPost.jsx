import React, { Component } from 'react';
import Keranjang from './Keranjang';

class KeranjangPost extends Component {
    state = {
        listkeranjang: [],
        totalHarga: 0,
        nom: 0
    }

    ambilDataDariApi = () => {

        // fetch("http://localhost:3001/barang?_sort=harga&_order=asc")
        fetch("http://localhost:3002/Keranjang?_sort=id&_order=asc")
            .then(response => response.json())
            .then(jsonGetDataApi => {
                this.setState({
                    listkeranjang: jsonGetDataApi
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariApi();
    }



    render() {
        return (
            <div className="wrapper">
                <div className="main_container">
                    <div className="item">
                        <br></br>
                        <h1>List keranjang</h1>
                        <br></br>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nomor</th>
                                    <th>ID Produk</th>
                                    <th>Nama</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                    {/* <th>Hapus</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listkeranjang.map(keranjang => {
                                    return (this.state.nom += 1,
                                        <Keranjang key={keranjang.userId} id={keranjang.userId} nama={keranjang.nama} nom={this.state.nom}
                                            harga={keranjang.harga} total_qty={keranjang.total_qty} total_harga={keranjang.total_harga} />
                                    )
                                })}
                                {this.state.listkeranjang.map(keranjang => {
                                    this.state.totalHarga += keranjang.total_harga
                                })}
                                < tr >
                                    <td colSpan="5" style={{ textAlign: "right" }}><b>Total</b></td>
                                    <td>Rp. {this.state.totalHarga}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}

export default KeranjangPost;