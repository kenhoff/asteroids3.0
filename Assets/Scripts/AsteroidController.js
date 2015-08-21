#pragma strict

public var speed : float = 1;

function Awake () {

	var rb = GetComponent. < Rigidbody2D > ();
	var direction = -(transform.position.normalized);
	rb.velocity = direction * speed;

}

function OnTriggerEnter2D (collider : Collider2D) {
	if (collider.gameObject.CompareTag("BoundingBox") == false) {
		Destroy(collider.gameObject);
		Destroy(gameObject);
	}
}
