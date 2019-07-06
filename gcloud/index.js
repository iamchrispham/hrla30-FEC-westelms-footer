const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

async function listBuckets() {

	//bucket.file(fileName) will return the file
	const [buckets] = await storage.getBuckets();
	console.log('Buckets:')
	buckets.forEach(bucket => {
		if (bucket.name === 'afucktonofchairs') {
			listFiles(bucket.name, (results) => {
				console.log('Files in Bucket:', (results));
			});
		}
	})
}

async function listFiles(bucketName, callback) {


	console.log('bucketName:', bucketName)
	var results = [];
	// Lists files in the bucket
	const [files] = await storage.bucket(bucketName).getFiles();

	console.log('Files:');
	files.forEach((file, i) => {
		var storageEndPoint = 'https://storage.cloud.google.com/afucktonofchairs/';
		if (file.name.endsWith('.jpeg') || file.name.endsWith('.jpg')) {
			storageEndPoint += file.name;
			results.push(storageEndPoint);
			if (i === files.length-1) {
				callback(results);
			}
		}
	});
	// [END storage_list_files]
}

listBuckets();

/*
Reflection:

What is the purpose of using gcloud storage functions in context of this app?

- The primary purpose is being able to grab metadata.  Here we can create an array of current URLs in our chairs bucket.

How will this aid in our search queries using AWS RDS?

 - We can update the database for any plausible new image files.  However, the problem is that we grab only the URL, and thus needs more exploration.
 - Otherwise, we reference AWS RDS records for URL lookup to serve via express.Í

*/