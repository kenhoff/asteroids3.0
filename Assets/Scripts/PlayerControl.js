#pragma strict

public var thrust : float = 10;
public var LaserSpawnPoint : Transform;
public var LaserObject : GameObject;
public var fireRate : float;

private var nextFire : float;
private var rb : Rigidbody2D;

function Start() {

	rb = GetComponent. < Rigidbody2D > ();

}

function Update() {
	// look at mouse
	var mouseWorldPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	mouseWorldPosition.z = 0;
	// transform.LookAt(mouseWorldPosition);

	var direction = mouseWorldPosition - transform.position;

	transform.eulerAngles.z = (Mathf.Atan2(direction.y,direction.x) * Mathf.Rad2Deg) - 90;

	if (Input.GetMouseButton(0)) {
		if (Time.time > nextFire) {
			nextFire = Time.time + fireRate;
			Instantiate(LaserObject, LaserSpawnPoint.position, transform.rotation);
		}
	}
}

function Shoot() {
	// body...
}

function FixedUpdate() {
	if (Input.GetMouseButton(1)) {
		rb.AddForce(transform.up * Time.deltaTime * thrust);
	}
}
