#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerExit2D (collider : Collider2D) {
	if (collider.gameObject.CompareTag("Player") == false) {
		Destroy(collider.gameObject);
	}
}
