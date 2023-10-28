import React, { Component } from "react";
import "../App.css";

const MAX = 50;

class CanvasComponent extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.count = 0;
    this.points = [];
  }
  
  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.canvas.height = 400;
    this.ctx.fillRect(0, 0, 400, 400);

    var r = 0;
    // eslint-disable-next-line
    for (var i = 0; i < MAX; i++) {
      this.points.push([Math.cos(r), Math.sin(r), 0]);
      r += (Math.PI * 2) / MAX;
    }
    // eslint-disable-next-line
    for (var i = 0; i < MAX; i++) {
      this.points.push([0, this.points[i][0], this.points[i][1]]);
    }
    // eslint-disable-next-line
    for (var i = 0; i < MAX; i++) {
      this.points.push([this.points[i][1], 0, this.points[i][0]]);
    }

    this.rus();
  }

  rus() {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.fillStyle = "rgba(0,0,0,0.03)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalCompositeOperation = "lighter";

    var tim = this.count / 5;

    for (var e = 0; e < 3; e++) {
      tim *= 1.7;
      var s = 1 - e / 3;
      var a = tim / 59;
      var yp = Math.cos(a);
      var yp2 = Math.sin(a);
      a = tim / 23;
      var xp = Math.cos(a);
      var xp2 = Math.sin(a);
      var p2 = [];
      // eslint-disable-next-line
      for (var i = 0; i < this.points.length; i++) {
        var x = this.points[i][0];
        var y = this.points[i][1];
        var z = this.points[i][2];

        var y1 = y * yp + z * yp2;
        var z1 = y * yp2 - z * yp;
        var x1 = x * xp + z1 * xp2;

        z = x * xp2 - z1 * xp;
        z1 = Math.pow(2, z * s);
        x = x1 * z1;
        y = y1 * z1;
        p2.push([x, y, z]);
      }

      s *= 120;
      for (var d = 0; d < 3; d++) {
        // eslint-disable-next-line
        for (var i = 0; i < MAX; i++) {
          const b = p2[d * MAX + i];
          const c = p2[((i + 1) % MAX) + d * MAX];
          this.ctx.beginPath();
          this.ctx.strokeStyle =
            "hsla(" + (((i / MAX) * 360) | 0) + ",70%,60%,0.15)";
          this.ctx.lineWidth = Math.pow(6, b[2]);
          this.ctx.lineTo(b[0] * s + 200, b[1] * s + 200);
          this.ctx.lineTo(c[0] * s + 200, c[1] * s + 200);
          this.ctx.stroke();
        }
      }
    }
    this.count++;
    requestAnimationFrame(this.rus.bind(this));
  }

  render() {
    return <canvas  ref={this.canvasRef}></canvas>;
  }
}

export default CanvasComponent;
