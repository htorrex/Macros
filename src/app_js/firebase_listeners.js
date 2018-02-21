// we are not using this listeners at the moment, will see once we integrate the mobile apps.
macrosCollection
    .onSnapshot(function (querySnapshot) {
        console.log("== something change mTotalMacros ==");
        var mTotalMacros = [];
        querySnapshot.docChanges.forEach(function (change) {
            if (change.type === "added") {
                return
            }
            if (change.type === "modified") {
                console.log("< modified: " + change.doc.data().name);
            }
            if (change.type === "removed") {
                console.log("< removed: " + change.doc.data().name);
            }
            // mTotalMacros.push(change.doc.data());
            console.log("== updating mTotalMacros ==");
            // $('#macrosTable').bootstrapTable("load", mTotalMacros); // real time updates
        });
    }, function (error) {
        console.log("onSnapshot Error macrosCollection");
    });

intakeCollection.where('userId', "==", currentUser.uid).where('intakeDate', '==', getTodaysDayFormat(0))
    .onSnapshot(function (qSnapshot) {
        console.log("== something change mIntake ==");
        var mIntake = [];
        qSnapshot.forEach(function (doc) {
            // mIntake.push(doc.data());
            console.log("== updating mIntake ==");
            // $('#consumptionTable').bootstrapTable("load", mIntake);
        });
    }, function (error) {
        console.log("onSnapshot Error intakeCollection");
    });
