#pragma strict

public var speed : float = 10;

function Awake () {
	var rb = GetComponent. < Rigidbody2D > ();
	rb.velocity = transform.up * speed;
}
