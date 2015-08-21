#pragma strict

public var Asteroid : GameObject;
public var AsteroidSpawnRate : float = 1;

public var BoundingDistance : float = 11;

function Awake () {
	InvokeRepeating("SpawnAsteroid", 2, AsteroidSpawnRate);
}

function SpawnAsteroid () {
	var x : float;
	var y : float;

	// put on x axis
	if (Random.value >= 0.5) {
		if (Random.value >= 0.5) {
			x = 1;
		}
		else {
			x = -1;
		}
		y = Random.Range(-1.0, 1.0);
	}
	// put on y axis
	else {
		if (Random.value >= 0.5) {
			y = 1;
		}
		else {
			y = -1;
		}
		x = Random.Range(-1.0, 1.0);
	}
	var asteroid = Instantiate(Asteroid, new Vector3(x * BoundingDistance, y * BoundingDistance, 0), Quaternion.identity);
}
