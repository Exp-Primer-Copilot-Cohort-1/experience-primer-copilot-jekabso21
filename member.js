function skillMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/skill-member.html',
        controller: 'skillMemberController',
        controllerAs: 'vm',
        blindToController: true,
        scope: {
            member: '='
        }
    };
}