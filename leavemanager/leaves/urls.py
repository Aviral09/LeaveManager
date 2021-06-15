from rest_framework import routers
from .api import LeaveViewSet

router = routers.DefaultRouter()
router.register('api/leaves', LeaveViewSet, 'leaves')

urlpatterns = router.urls