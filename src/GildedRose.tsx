import React from 'react';
import ShopItemTable, { Item } from "./components/ShopItemTable";
import {items} from "./data/shopItems";
import {Shop} from "./api/gilded_rose";
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import WelcomeMessage from "./components/WelcomeMessage";

interface Props {}

interface State {
    items: Item[],
}

const shop = new Shop(items);

class GildedRose extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: shop.items,
        };







        
        console.log('Initial Shop state: ', this.state.items)
    }

    updateShowQuality() {
        shop.updateQuality();
        console.log('Shop State after update:', shop)

        this.setState({
            items: shop.items
        })
    }

    getInSaleItems(currentElement:any) {
        return currentElement.quality > 0 && currentElement.sellIn > 0; 
    }
    getDiscountItems(currentElement:any) {
       
        return currentElement.quality <= 0 || currentElement.sellIn <= 0; 
    }

    showSaleItems()
    {
        return this.state.items.filter(this.getInSaleItems)
    }
    
    showDiscountItems()
    {
        return this.state.items.filter(this.getDiscountItems)
    }
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Navbar bg="light">
                                <Navbar.Brand href="#home">The Gilded Rose </Navbar.Brand>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <WelcomeMessage />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Tabs defaultActiveKey="sale" id="uncontrolled-tab-example">
                                <Tab eventKey="sale" title={`On Sale (${this.showSaleItems().length})`}>
                                    <Card>
                                        <ShopItemTable items={this.showSaleItems()}/>
                                    </Card>
                                </Tab>
                                <Tab eventKey="discount" title={`Discount (${this.showDiscountItems().length})`}>
                                <ShopItemTable items={this.showDiscountItems()}/>
                                </Tab>
                            </Tabs>
                            <Button onClick={this.updateShowQuality.bind(this)}>Update Quality</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GildedRose;
