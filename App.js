import React, { Component } from 'react';
import './App.css';
import ReactJson from 'react-json-view';
import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);

const Hello = ({data}) => <h1>Hello {data}</h1>;

let renderer, scene, camera;

const test = {
    "images":[],
    "geometries":[{
        "uuid":"9330B4A1-BF6A-4A71-A9B3-7710F05AB1D4",
        "materials":[{
            "colorSpecular":[0.5,0.5,0.5],
            "depthWrite":true,
            "depthTest":true,
            "DbgColor":15658734,
            "colorDiffuse":[0.64,0.64,0.64],
            "wireframe":true,
            "doubleSided":true,
            "transparent":false,
            "shading":"phong",
            "DbgIndex":0,
            "specularCoef":50,
            "DbgName":"Material",
            "visible":true,
            "blending":1,
            "colorEmissive":[0,0,0],
            "opacity":1
        }],
        "type":"Geometry",
        "name":"CubeGeometry",
        "data":{
            "faces":[
            0,0,1,2,0,0,2,3,0,0,3,4,0,0,4,5,0,0,5,1,0,1,5,10,0,1,6,2,0,1,10,6,0,2,6,7,0,2,7,3,0,3,7,8,0,3,8,4,0,4,8,9,0,4,9,5,0,5,9,10,0,6,10,11,0,6,11,7,0,7,11,8,0,8,11,9,0,9,11,10
            ],
            "vertices":[
            0.0,0.0,5.0,4.472136,0.0,2.236068,1.381966,4.253254,2.236068,-3.618034,2.628655,2.236068,-3.618034,-2.628655,2.236068,1.381966,-4.253254,2.236068,3.618034,2.628655,-2.236068,-1.381966,4.253254,-2.236068,-4.472136,0.0,-2.236068,-1.381966,-4.253254,-2.236068,3.618034,-2.628655,-2.236068,0.0,0.0,-5.0
            ],
            "uvs":[]
        }
    }],
    "textures":[],
    "metadata":{
        "type":"Object",
        "generator":"io_three",
        "version":4.4
    },
    "animations":[{
        "fps":24,
        "tracks":[],
        "name":"default"
    }],
    "materials":[{
        "depthWrite":true,
        "depthTest":true,
        "name":"Material",
        "vertexColors":0,
        "shininess":50,
        "uuid":"5743D346-BD6D-4E2D-8C26-469C47E83BF2",
        "type":"MeshPhongMaterial",
        "color":10724259,
        "emissive":0,
        "specular":8355711,
        "blending":1
    }],
    "object":{
        "uuid":"50DE8152-D1B8-4F08-9B18-8948279A4855",
        "type":"Scene",
        "matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
        "children":[{
            "name":"Isocahedron",
            "uuid":"F3EE9758-7E5E-4FFF-B3F8-B0F9E3220C9D",
            "matrix":[-1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1],
            "visible":true,
            "type":"Mesh",
            "material":"5743D346-BD6D-4E2D-8C26-469C47E83BF2",
            "castShadow":true,
            "receiveShadow":true,
            "geometry":"9330B4A1-BF6A-4A71-A9B3-7710F05AB1D4"
        }]
    }
}

const cube = {
  images: [],
  geometries: [
    {
      uuid: "9330B4A1-BF6A-4A71-A9B3-7710F05AB1D4",
      materials: [
        {
          colorSpecular: [0.5, 0.5, 0.5],
          depthWrite: true,
          depthTest: true,
          DbgColor: 15658734,
          colorDiffuse: [0.64, 0.64, 0.64],
          wireframe: true,
          doubleSided: true,
          transparent: false,
          shading: "phong",
          DbgIndex: 0,
          specularCoef: 50,
          DbgName: "Material",
          visible: true,
          blending: 1,
          colorEmissive: [0, 0, 0],
          opacity: 1
        }
      ],
      type: "Geometry",
      name: "CubeGeometry",
      data: {
        faces: [
          3,
          0,
          1,
          2,
          3,
          0,
          3,
          4,
          7,
          6,
          5,
          0,
          3,
          0,
          4,
          5,
          1,
          0,
          3,
          1,
          5,
          6,
          2,
          0,
          3,
          2,
          6,
          7,
          3,
          0,
          3,
          4,
          0,
          3,
          7,
          0
        ],
        vertices: [
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          -1,
          1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          1,
          1,
          1,
          1,
          1,
          1,
          -1,
          1
        ],
        uvs: []
      }
    }
  ],
  textures: [],
  metadata: {
    type: "Object",
    generator: "io_three",
    version: 4.4
  },
  animations: [
    {
      fps: 24,
      tracks: [],
      name: "default"
    }
  ],
  materials: [
    {
      depthWrite: true,
      depthTest: true,
      name: "Material",
      vertexColors: 0,
      shininess: 50,
      uuid: "5743D346-BD6D-4E2D-8C26-469C47E83BF2",
      type: "MeshPhongMaterial",
      color: 10724259,
      emissive: 0,
      specular: 8355711,
      blending: 1
    }
  ],
  object: {
    uuid: "50DE8152-D1B8-4F08-9B18-8948279A4855",
    type: "Scene",
    matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    children: [
      {
        name: "Cube",
        uuid: "F3EE9758-7E5E-4FFF-B3F8-B0F9E3220C9D",
        matrix: [-1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        visible: true,
        type: "Mesh",
        material: "5743D346-BD6D-4E2D-8C26-469C47E83BF2",
        castShadow: true,
        receiveShadow: true,
        geometry: "9330B4A1-BF6A-4A71-A9B3-7710F05AB1D4"
      }
    ]
  }
};

class Viewport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geo: this.props
    }
  }

  componentDidMount() {
    const { width, height } = this.props;
    const { geo } = this.state;
    console.log("viewport rendered state.props.geo")
    console.log(geo)
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 50, width / height, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
      canvas: this.refs.threeCanvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize( width, height );
    camera.position.set(10, 11, 7)
    camera.lookAt(new THREE.Vector3())

    const controls = new OrbitControls(camera, renderer.domElement);

    var arrow_x = new THREE.Vector3(1, 0, 0);
    var arrow_y = new THREE.Vector3(0, 1, 0);
    var arrow_z = new THREE.Vector3(0, 0, -1);

    function createArrowHelper(vector, length, hex) {
      vector.normalize();
      var origin = new THREE.Vector3(0, 0, 0);
      var lengthOfArrow = length;
      var color = hex;

      var arrowHelper = new THREE.ArrowHelper(
        vector,
        origin,
        lengthOfArrow,
        color
      );
      scene.add(arrowHelper);
    }

    createArrowHelper(arrow_x, 3, 0xff0000);
    createArrowHelper(arrow_y, 3, 0xffff00);
    createArrowHelper(arrow_z, 3, 0x00ff00);

    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    function createGridHelper(size, divisions) {
      var gridHelper = new THREE.GridHelper(size, divisions);
      scene.add(gridHelper);
    }

    createGridHelper(10, 10);

    const material = new THREE.MeshPhongMaterial({
      color: 0x0f0f0f,
      dithering: true
    });

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
    const geoedge = new THREE.EdgesGeometry( cube.geometry );
    var matedge = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
    var wireframe = new THREE.LineSegments( geoedge, matedge );
    cube.add( wireframe );

    const loader = new THREE.ObjectLoader();

    function loadGeo(loader, dbjson) {
      var model = loader.parse(dbjson);
      var material = new THREE.MeshPhongMaterial({
        color: 0x0f0f0f,
        dithering: true
      });
      const mesh = new THREE.Mesh(model.children[0].geometry, material);
      var geoedge = new THREE.EdgesGeometry( mesh.geometry );
      var matedge = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
      var wireframe = new THREE.LineSegments( geoedge, matedge );

      scene.add(wireframe);
    }

    loadGeo(loader, geo.geo)

  }
  

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps === this.props){
      console.log("shouldComponentUpdate => Viewport false")
      return false;
    }
    console.log("shouldComponentUpdate => Viewport true")
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("component will update")
  }

  componentDidUpdate() {
    const { geo } = this.state;
    console.log("component did update")
    this.setState({data: geo});
    this._render();
  }

  _render = () => {
    requestAnimationFrame(this._render);
    renderer.render( scene, camera );
  }

  render() {
    return (
      <div>
        <canvas ref="threeCanvas"></canvas> 
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: cube
    }
    console.log("app constructor mounted")
  }

  componentDidMount() {
    fetch('/api')
    .then(res => res.json())
    .then(jsondb => this.setState({data: jsondb}))
    console.log("app component mounted")
  }

  render() {
    const { data } = this.state;
    console.log("app rendered")
    return (
      <div className="App">
        <Hello data={"REDBACK"}/>
        <ReactJson src={data} collapsed={1}/>
        <Viewport width={window.innerWidth-50} height={500} geo={data}/>
      </div>
    );
  }
}

export default App;
