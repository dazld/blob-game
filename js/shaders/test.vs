
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute float aColor;

uniform mat4 uMVMatrix;
varying vec2 vTextureCoord;
varying float vColor;

void main(void) {
	gl_Position = uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);
	vTextureCoord = aTextureCoord;
	vColor = aColor;
}
