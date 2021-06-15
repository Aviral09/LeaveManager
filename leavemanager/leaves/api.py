from leaves.models import Leave
from rest_framework import viewsets, permissions
from .serializers import LeaveSerializer

class LeaveViewSet(viewsets.ModelViewSet):
    queryset = Leave.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeaveSerializer