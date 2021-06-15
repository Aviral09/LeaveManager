from django.db import models

LEAVES = (
    ('EL','EL'),
    ('CL','CL'),
    ('CCL','CCL'),
)

# Create your models here.
class Leave(models.Model):
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    type = models.CharField(max_length=5, choices=LEAVES, null=False, blank=True)
    taken_from = models.DateField(null=False, blank=False, default='2021-01-01')
    taken_till = models.DateField(null=False, blank=False, default='2021-01-01')
    approved = models.BooleanField(default=0, blank=True)
    entry_created_at = models.DateTimeField(auto_now_add=True)